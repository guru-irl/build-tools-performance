import React from 'react';
const LABEL_4207 = 'component_4207';
export function Component4207({ value = 4207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4207, 'data-value': derived.doubled }, children);
}
export default Component4207;
