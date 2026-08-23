import React from 'react';
const LABEL_38770 = 'component_38770';
export function Component38770({ value = 38770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38770, 'data-value': derived.doubled }, children);
}
export default Component38770;
