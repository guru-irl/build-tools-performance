import React from 'react';
const LABEL_29313 = 'component_29313';
export function Component29313({ value = 29313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29313, 'data-value': derived.doubled }, children);
}
export default Component29313;
