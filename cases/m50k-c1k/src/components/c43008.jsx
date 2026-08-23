import React from 'react';
const LABEL_43008 = 'component_43008';
export function Component43008({ value = 43008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43008, 'data-value': derived.doubled }, children);
}
export default Component43008;
