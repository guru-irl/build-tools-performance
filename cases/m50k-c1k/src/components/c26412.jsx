import React from 'react';
const LABEL_26412 = 'component_26412';
export function Component26412({ value = 26412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26412, 'data-value': derived.doubled }, children);
}
export default Component26412;
