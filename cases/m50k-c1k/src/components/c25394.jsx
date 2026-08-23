import React from 'react';
const LABEL_25394 = 'component_25394';
export function Component25394({ value = 25394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25394, 'data-value': derived.doubled }, children);
}
export default Component25394;
