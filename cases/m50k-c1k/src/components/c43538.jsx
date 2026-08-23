import React from 'react';
const LABEL_43538 = 'component_43538';
export function Component43538({ value = 43538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43538, 'data-value': derived.doubled }, children);
}
export default Component43538;
