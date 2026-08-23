import React from 'react';
const LABEL_45898 = 'component_45898';
export function Component45898({ value = 45898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45898, 'data-value': derived.doubled }, children);
}
export default Component45898;
