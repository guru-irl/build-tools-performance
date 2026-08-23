import React from 'react';
const LABEL_40767 = 'component_40767';
export function Component40767({ value = 40767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40767, 'data-value': derived.doubled }, children);
}
export default Component40767;
