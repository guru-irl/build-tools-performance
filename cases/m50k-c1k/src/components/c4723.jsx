import React from 'react';
const LABEL_4723 = 'component_4723';
export function Component4723({ value = 4723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4723, 'data-value': derived.doubled }, children);
}
export default Component4723;
