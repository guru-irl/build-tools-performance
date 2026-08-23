import React from 'react';
const LABEL_14120 = 'component_14120';
export function Component14120({ value = 14120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14120, 'data-value': derived.doubled }, children);
}
export default Component14120;
