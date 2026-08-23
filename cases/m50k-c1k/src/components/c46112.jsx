import React from 'react';
const LABEL_46112 = 'component_46112';
export function Component46112({ value = 46112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46112, 'data-value': derived.doubled }, children);
}
export default Component46112;
