import React from 'react';
const LABEL_43305 = 'component_43305';
export function Component43305({ value = 43305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43305, 'data-value': derived.doubled }, children);
}
export default Component43305;
