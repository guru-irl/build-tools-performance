import React from 'react';
const LABEL_41177 = 'component_41177';
export function Component41177({ value = 41177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41177, 'data-value': derived.doubled }, children);
}
export default Component41177;
