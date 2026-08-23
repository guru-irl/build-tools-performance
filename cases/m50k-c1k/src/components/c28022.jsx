import React from 'react';
const LABEL_28022 = 'component_28022';
export function Component28022({ value = 28022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28022, 'data-value': derived.doubled }, children);
}
export default Component28022;
