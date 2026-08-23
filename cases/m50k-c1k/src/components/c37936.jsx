import React from 'react';
const LABEL_37936 = 'component_37936';
export function Component37936({ value = 37936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37936, 'data-value': derived.doubled }, children);
}
export default Component37936;
