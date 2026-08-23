import React from 'react';
const LABEL_34003 = 'component_34003';
export function Component34003({ value = 34003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34003, 'data-value': derived.doubled }, children);
}
export default Component34003;
