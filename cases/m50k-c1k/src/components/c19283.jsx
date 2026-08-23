import React from 'react';
const LABEL_19283 = 'component_19283';
export function Component19283({ value = 19283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19283, 'data-value': derived.doubled }, children);
}
export default Component19283;
