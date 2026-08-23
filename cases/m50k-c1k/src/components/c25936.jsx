import React from 'react';
const LABEL_25936 = 'component_25936';
export function Component25936({ value = 25936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25936, 'data-value': derived.doubled }, children);
}
export default Component25936;
