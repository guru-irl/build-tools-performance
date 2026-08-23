import React from 'react';
const LABEL_44952 = 'component_44952';
export function Component44952({ value = 44952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44952, 'data-value': derived.doubled }, children);
}
export default Component44952;
