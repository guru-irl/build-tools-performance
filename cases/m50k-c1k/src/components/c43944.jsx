import React from 'react';
const LABEL_43944 = 'component_43944';
export function Component43944({ value = 43944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43944, 'data-value': derived.doubled }, children);
}
export default Component43944;
