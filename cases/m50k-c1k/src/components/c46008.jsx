import React from 'react';
const LABEL_46008 = 'component_46008';
export function Component46008({ value = 46008, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46008, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46008, 'data-value': derived.doubled }, children);
}
export default Component46008;
