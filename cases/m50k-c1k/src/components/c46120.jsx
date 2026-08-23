import React from 'react';
const LABEL_46120 = 'component_46120';
export function Component46120({ value = 46120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46120, 'data-value': derived.doubled }, children);
}
export default Component46120;
