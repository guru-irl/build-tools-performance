import React from 'react';
const LABEL_44387 = 'component_44387';
export function Component44387({ value = 44387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44387, 'data-value': derived.doubled }, children);
}
export default Component44387;
