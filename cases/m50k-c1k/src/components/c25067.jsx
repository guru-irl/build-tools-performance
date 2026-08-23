import React from 'react';
const LABEL_25067 = 'component_25067';
export function Component25067({ value = 25067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25067, 'data-value': derived.doubled }, children);
}
export default Component25067;
