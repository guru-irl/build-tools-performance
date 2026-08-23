import React from 'react';
const LABEL_987 = 'component_987';
export function Component987({ value = 987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_987, 'data-value': derived.doubled }, children);
}
export default Component987;
