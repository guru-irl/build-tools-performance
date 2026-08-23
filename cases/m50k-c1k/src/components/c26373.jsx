import React from 'react';
const LABEL_26373 = 'component_26373';
export function Component26373({ value = 26373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26373, 'data-value': derived.doubled }, children);
}
export default Component26373;
