import React from 'react';
const LABEL_41887 = 'component_41887';
export function Component41887({ value = 41887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41887, 'data-value': derived.doubled }, children);
}
export default Component41887;
