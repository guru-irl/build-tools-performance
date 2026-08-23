import React from 'react';
const LABEL_43142 = 'component_43142';
export function Component43142({ value = 43142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43142, 'data-value': derived.doubled }, children);
}
export default Component43142;
