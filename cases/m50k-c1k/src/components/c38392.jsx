import React from 'react';
const LABEL_38392 = 'component_38392';
export function Component38392({ value = 38392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38392, 'data-value': derived.doubled }, children);
}
export default Component38392;
