import React from 'react';
const LABEL_244 = 'component_244';
export function Component244({ value = 244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_244, 'data-value': derived.doubled }, children);
}
export default Component244;
