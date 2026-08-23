import React from 'react';
const LABEL_28814 = 'component_28814';
export function Component28814({ value = 28814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28814, 'data-value': derived.doubled }, children);
}
export default Component28814;
