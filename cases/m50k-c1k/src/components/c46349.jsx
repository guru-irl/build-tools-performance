import React from 'react';
const LABEL_46349 = 'component_46349';
export function Component46349({ value = 46349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46349, 'data-value': derived.doubled }, children);
}
export default Component46349;
