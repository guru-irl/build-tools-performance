import React from 'react';
const LABEL_7816 = 'component_7816';
export function Component7816({ value = 7816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7816, 'data-value': derived.doubled }, children);
}
export default Component7816;
