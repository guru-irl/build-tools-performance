import React from 'react';
const LABEL_45244 = 'component_45244';
export function Component45244({ value = 45244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45244, 'data-value': derived.doubled }, children);
}
export default Component45244;
