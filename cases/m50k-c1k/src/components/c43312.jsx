import React from 'react';
const LABEL_43312 = 'component_43312';
export function Component43312({ value = 43312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43312, 'data-value': derived.doubled }, children);
}
export default Component43312;
