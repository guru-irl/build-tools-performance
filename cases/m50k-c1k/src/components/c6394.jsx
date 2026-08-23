import React from 'react';
const LABEL_6394 = 'component_6394';
export function Component6394({ value = 6394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6394, 'data-value': derived.doubled }, children);
}
export default Component6394;
