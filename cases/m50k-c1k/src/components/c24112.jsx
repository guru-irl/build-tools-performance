import React from 'react';
const LABEL_24112 = 'component_24112';
export function Component24112({ value = 24112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24112, 'data-value': derived.doubled }, children);
}
export default Component24112;
