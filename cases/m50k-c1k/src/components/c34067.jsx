import React from 'react';
const LABEL_34067 = 'component_34067';
export function Component34067({ value = 34067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34067, 'data-value': derived.doubled }, children);
}
export default Component34067;
