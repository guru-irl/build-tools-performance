import React from 'react';
const LABEL_44970 = 'component_44970';
export function Component44970({ value = 44970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44970, 'data-value': derived.doubled }, children);
}
export default Component44970;
