import React from 'react';
const LABEL_38970 = 'component_38970';
export function Component38970({ value = 38970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38970, 'data-value': derived.doubled }, children);
}
export default Component38970;
