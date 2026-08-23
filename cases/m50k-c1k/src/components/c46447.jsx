import React from 'react';
const LABEL_46447 = 'component_46447';
export function Component46447({ value = 46447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46447, 'data-value': derived.doubled }, children);
}
export default Component46447;
