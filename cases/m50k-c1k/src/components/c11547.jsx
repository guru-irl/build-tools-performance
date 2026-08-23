import React from 'react';
const LABEL_11547 = 'component_11547';
export function Component11547({ value = 11547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11547, 'data-value': derived.doubled }, children);
}
export default Component11547;
