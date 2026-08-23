import React from 'react';
const LABEL_38207 = 'component_38207';
export function Component38207({ value = 38207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38207, 'data-value': derived.doubled }, children);
}
export default Component38207;
