import React from 'react';
const LABEL_4112 = 'component_4112';
export function Component4112({ value = 4112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4112, 'data-value': derived.doubled }, children);
}
export default Component4112;
