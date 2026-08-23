import React from 'react';
const LABEL_10527 = 'component_10527';
export function Component10527({ value = 10527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10527, 'data-value': derived.doubled }, children);
}
export default Component10527;
