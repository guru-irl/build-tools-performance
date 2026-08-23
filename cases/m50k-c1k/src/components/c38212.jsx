import React from 'react';
const LABEL_38212 = 'component_38212';
export function Component38212({ value = 38212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38212, 'data-value': derived.doubled }, children);
}
export default Component38212;
