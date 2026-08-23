import React from 'react';
const LABEL_11345 = 'component_11345';
export function Component11345({ value = 11345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11345, 'data-value': derived.doubled }, children);
}
export default Component11345;
