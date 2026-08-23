import React from 'react';
const LABEL_44394 = 'component_44394';
export function Component44394({ value = 44394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44394, 'data-value': derived.doubled }, children);
}
export default Component44394;
