import React from 'react';
const LABEL_20987 = 'component_20987';
export function Component20987({ value = 20987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20987, 'data-value': derived.doubled }, children);
}
export default Component20987;
