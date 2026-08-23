import React from 'react';
const LABEL_43420 = 'component_43420';
export function Component43420({ value = 43420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43420, 'data-value': derived.doubled }, children);
}
export default Component43420;
