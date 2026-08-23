import React from 'react';
const LABEL_26112 = 'component_26112';
export function Component26112({ value = 26112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26112, 'data-value': derived.doubled }, children);
}
export default Component26112;
