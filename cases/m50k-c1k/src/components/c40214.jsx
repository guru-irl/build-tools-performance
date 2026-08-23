import React from 'react';
const LABEL_40214 = 'component_40214';
export function Component40214({ value = 40214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40214, 'data-value': derived.doubled }, children);
}
export default Component40214;
