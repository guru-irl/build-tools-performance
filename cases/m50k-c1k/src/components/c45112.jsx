import React from 'react';
const LABEL_45112 = 'component_45112';
export function Component45112({ value = 45112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45112, 'data-value': derived.doubled }, children);
}
export default Component45112;
