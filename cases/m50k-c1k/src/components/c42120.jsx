import React from 'react';
const LABEL_42120 = 'component_42120';
export function Component42120({ value = 42120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42120, 'data-value': derived.doubled }, children);
}
export default Component42120;
