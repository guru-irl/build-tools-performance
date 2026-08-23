import React from 'react';
const LABEL_41413 = 'component_41413';
export function Component41413({ value = 41413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41413, 'data-value': derived.doubled }, children);
}
export default Component41413;
