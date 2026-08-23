import React from 'react';
const LABEL_19446 = 'component_19446';
export function Component19446({ value = 19446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19446, 'data-value': derived.doubled }, children);
}
export default Component19446;
